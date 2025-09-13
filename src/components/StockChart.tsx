import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Inject only once
    if (container.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        ['Apple', 'AAPL|1M'],
        ['Google', 'GOOGL|1M'],
        ['Microsoft', 'MSFT|1M'],
        ['NASDAQ:NVDA|1M'],
        ['NASDAQ:AMZN|1M'],
        ['NASDAQ:TSLA|1M'],
        ['NASDAQ:META|1M'],
      ],
      chartOnly: false,
      width: '100%',
      height: '100%',
      locale: 'en',
      colorTheme: 'dark',
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: '14',
      noTimeScale: false,
      valuesTracking: '1',
      changeMode: 'price-and-percent',
      chartType: 'area',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      widgetFontColor: 'rgba(149, 152, 161, 1)',
      lineWidth: 2,
      lineType: 0,
      dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
      container_id: container.current.id,
    });
    container.current.appendChild(script);

    // Responsive: ensure parent div fills available space
    container.current.style.width = '100%';
    container.current.style.height = '100%';

    return () => {
      if (container.current) container.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      className="w-full h-full"
      ref={container}
      style={{ width: '100%', height: '100%', minHeight: 300 }}
    />
  );
}

export default memo(TradingViewWidget);
