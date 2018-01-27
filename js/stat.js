var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SMALL = 10;
var GAP_BIG = 40;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP_SMALL, CLOUD_Y + GAP_SMALL, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PTMono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_SMALL * 2, GAP_BIG);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_SMALL * 2, GAP_BIG + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';

    var timeRounded = Math.floor(times[i]);
    var barOffset = BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillText(timeRounded, CLOUD_X + GAP_BIG + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_BIG + TEXT_HEIGHT + GAP_SMALL + barOffset);
    ctx.fillText(names[i], CLOUD_X + GAP_BIG + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_BIG + (TEXT_HEIGHT + GAP_SMALL) * 2 + BAR_HEIGHT);

    if(names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      var colorOpacity = Math.random().toFixed(2);
      ctx.fillStyle = 'rgba(0, 0, 255,' + colorOpacity + ')';
    }

    ctx.fillRect(CLOUD_X + GAP_BIG + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_BIG + TEXT_HEIGHT + GAP_SMALL * 2 + barOffset, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

}
