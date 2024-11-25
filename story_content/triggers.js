function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Yd7HnUCh2T":
        Script1();
        break;
      case "62ZGXVwHvvY":
        Script2();
        break;
      case "5YeNTQ0Gl3G":
        Script3();
        break;
      case "6LIearydFSD":
        Script4();
        break;
      case "5xeQUJkhRJb":
        Script5();
        break;
      case "5zfBZw79cbz":
        Script6();
        break;
      case "6EDj6MjjXUp":
        Script7();
        break;
      case "6JMTnGINRLw":
        Script8();
        break;
      case "6EOBjRkwfTd":
        Script9();
        break;
      case "6FUMSc8c7jP":
        Script10();
        break;
      case "5keFRHOWmUf":
        Script11();
        break;
      case "5dHIRgvgnpS":
        Script12();
        break;
      case "6QzA0W8gnDP":
        Script13();
        break;
      case "69TXvw5COLm":
        Script14();
        break;
      case "6WIt9r843ba":
        Script15();
        break;
      case "5uejovHutei":
        Script16();
        break;
      case "6QY5p2exK2q":
        Script17();
        break;
      case "6bvXaJ2bTLI":
        Script18();
        break;
      case "5qvBNdEMriK":
        Script19();
        break;
      case "68ZLVfSptzM":
        Script20();
        break;
      case "6TBKNYaM2GQ":
        Script21();
        break;
      case "5aVbbUtWZ9d":
        Script22();
        break;
      case "6RL4wXgRKsR":
        Script23();
        break;
      case "61jZ1KO8Tfs":
        Script24();
        break;
      case "63Wd8OcpPD7":
        Script25();
        break;
      case "5cS81p8fuEZ":
        Script26();
        break;
      case "6GfGwXEfkyz":
        Script27();
        break;
      case "6GFKcy8fjPt":
        Script28();
        break;
      case "6hZ0StpfVNi":
        Script29();
        break;
      case "5mtehI4wRow":
        Script30();
        break;
      case "6HWuSaoOctx":
        Script31();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5Z0TdcIX5Ha');
const duration = 500;
const easing = 'ease-out';
const id = '6NtgrWnVXPz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5rumNsv0AwI');
const duration = 500;
const easing = 'ease-out';
const id = '5psS9vYQSCJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
