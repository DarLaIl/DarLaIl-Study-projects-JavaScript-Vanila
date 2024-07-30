import applyWallpaper from './applyWallPaper.mjs';
import getSeason from './getSeason.mjs';

function wallPaper(result, month) {
  const season = getSeason(result, month);

  applyWallpaper(season, result);
}

export default wallPaper;
