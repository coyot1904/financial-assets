import {filterHandlers} from '../src/Assets/FilterAssets';
import initialAssets from '../assets/financial_assets.json';

type Asset = (typeof initialAssets)[number];

describe('filterHandlers', () => {
  let setAssetsMock: jest.Mock;

  beforeEach(() => {
    setAssetsMock = jest.fn();
  });

  it('handleSortAsc sorts assets by dailyChangePercent in ascending order', () => {
    filterHandlers.handleSortAsc.handler(setAssetsMock);
    const sortedAssets = [...initialAssets].sort(
      (a, b) => a.dailyChangePercent - b.dailyChangePercent,
    );
    expect(setAssetsMock).toHaveBeenCalledWith(expect.any(Function));
    const callback = setAssetsMock.mock.calls[0][0];
    expect(callback(initialAssets)).toEqual(sortedAssets);
  });

  it('handleSortDesc sorts assets by dailyChangePercent in descending order', () => {
    filterHandlers.handleSortDesc.handler(setAssetsMock);
    const sortedAssets = [...initialAssets].sort(
      (a, b) => b.dailyChangePercent - a.dailyChangePercent,
    );
    expect(setAssetsMock).toHaveBeenCalledWith(expect.any(Function));
    const callback = setAssetsMock.mock.calls[0][0];
    expect(callback(initialAssets)).toEqual(sortedAssets);
  });

  it('handleTopGainers filters assets with positive dailyChangePercent', () => {
    filterHandlers.handleTopGainers.handler(setAssetsMock);
    const filteredAssets = [...initialAssets]
      .filter(asset => asset.dailyChangePercent > 0)
      .sort((a, b) => b.dailyChangePercent - a.dailyChangePercent);
    expect(setAssetsMock).toHaveBeenCalledWith(expect.any(Function));
    const callback = setAssetsMock.mock.calls[0][0];
    expect(callback(initialAssets)).toEqual(filteredAssets);
  });

  it('handleSortStocks filters assets by type "stock"', () => {
    filterHandlers.handleSortStocks.handler(setAssetsMock);
    const filteredAssets = [...initialAssets].filter(
      asset => asset.type === 'stock',
    );
    expect(setAssetsMock).toHaveBeenCalledWith(expect.any(Function));
    const callback = setAssetsMock.mock.calls[0][0];
    expect(callback(initialAssets)).toEqual(filteredAssets);
  });

  it('handleSortCrypto filters assets by type "crypto"', () => {
    filterHandlers.handleSortCypto.handler(setAssetsMock);
    const filteredAssets = [...initialAssets].filter(
      asset => asset.type === 'crypto',
    );
    expect(setAssetsMock).toHaveBeenCalledWith(expect.any(Function));
    const callback = setAssetsMock.mock.calls[0][0];
    expect(callback(initialAssets)).toEqual(filteredAssets);
  });
});
