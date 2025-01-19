import initialAssets from '../../assets/financial_assets.json';

type Asset = (typeof initialAssets)[number];

type FilterHandler = {
  handler: (setAssets: React.Dispatch<React.SetStateAction<Asset[]>>) => void;
  activeFilter: number;
};

export const filterHandlers: Record<string, FilterHandler> = {
  handleSortAsc: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].sort(
          (a, b) => a.dailyChangePercent - b.dailyChangePercent,
        ),
      ),
    activeFilter: 1,
  },
  handleSortDesc: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].sort(
          (a, b) => b.dailyChangePercent - a.dailyChangePercent,
        ),
      ),
    activeFilter: 2,
  },
  handleSortNameAsc: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].sort((a, b) => a.name.localeCompare(b.name)),
      ),
    activeFilter: 3,
  },
  handleSortNameDesc: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].sort((a, b) => b.name.localeCompare(a.name)),
      ),
    activeFilter: 4,
  },
  handleTopGainers: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets]
          .filter(asset => asset.dailyChangePercent > 0)
          .sort((a, b) => b.dailyChangePercent - a.dailyChangePercent),
      ),
    activeFilter: 5,
  },
  handleTopLosers: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets]
          .filter(asset => asset.dailyChangePercent < 0)
          .sort((a, b) => b.dailyChangePercent - a.dailyChangePercent),
      ),
    activeFilter: 6,
  },
  handleSortStocks: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].filter(asset => asset.type === 'stock'),
      ),
    activeFilter: 7,
  },
  handleSortCypto: {
    handler: setAssets =>
      setAssets(prevAssets =>
        [...initialAssets].filter(asset => asset.type === 'crypto'),
      ),
    activeFilter: 8,
  },
};
