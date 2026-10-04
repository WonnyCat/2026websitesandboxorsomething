(function(window, undefined){ 
  /* Options */
  var creatives = [
    {"title": "", "creative": "/comicad.png", "href": "/homecomic"},
    {"title": "", "creative": "/voicewanted.png", "href": "/howtobeanvoiceactor"},
  ];

  /* Get the current script element */
  var scripts = document.getElementsByTagName("script");
  var index = scripts.length - 1;
  var kaboodleTag = scripts[index];
  var src = kaboodleTag.src;
  var kaboodleRoot = src.substring(0, src.lastIndexOf("/"));

  /* Load CSS */
  var kaboodleStyle = document.createElement("link");
  kaboodleStyle.href = kaboodleRoot + "/adparser.css";
  kaboodleStyle.rel = "stylesheet";
  kaboodleStyle.type = "text/css";
  document.head.appendChild(kaboodleStyle);

  var numRows = kaboodleTag.dataset.numRows || 1;

  /* Main module wrapper */
  var kaboodleModule = document.createElement("div");
  kaboodleModule.className = "kaboodle-module";
  kaboodleTag.parentNode.insertBefore(kaboodleModule, kaboodleTag.nextSibling);

  var kaboodleHeader = document.createElement("a");
  kaboodleHeader.className = "kaboodle-header";
  kaboodleHeader.href = 'https://wonny-cat-and-friends.neocities.org/';
  kaboodleHeader.innerHTML = "Ads Section brought to you by KK Productions";
  kaboodleModule.appendChild(kaboodleHeader);

  var kaboodleItems = document.createElement("div");
  kaboodleItems.className = "kaboodle-items";
  kaboodleModule.appendChild(kaboodleItems);

  randomize(creatives);
  window.addEventListener("resize", loadItems, false);

  function loadItems (){
    // Clear existing content
    while (kaboodleItems.firstChild) {
      kaboodleItems.removeChild(kaboodleItems.firstChild);
    }

    var width = kaboodleModule.offsetWidth;
    var numCols = Math.floor(width / 600.0);
    if (numCols < 1) numCols = 1;

    // Load image creatives
    for(var i = 0; i < numCols * numRows; i++){
      var creative = creatives[i % creatives.length];
      var kaboodleItemLink = document.createElement("a");
      kaboodleItemLink.href = creative["href"]; 
      kaboodleItemLink.target = "_blank";

      kaboodleItems.appendChild(kaboodleItemLink);
      var kaboodleItemWrapper = document.createElement("div");
      kaboodleItemWrapper.className = "kaboodle-item"; 
      kaboodleItemLink.appendChild(kaboodleItemWrapper);

      var kaboodleItemImg = document.createElement("img");
      kaboodleItemImg.src = kaboodleRoot + creative["creative"];
      kaboodleItemWrapper.appendChild(kaboodleItemImg);

      var kaboodleItemCaption = document.createElement("p");
      kaboodleItemCaption.innerHTML = creative["title"];
      kaboodleItemWrapper.appendChild(kaboodleItemCaption);
    }

    // ✅ Add your 3 external iframe ads
    var iframeWrapper = document.createElement("div");
    iframeWrapper.className = "kaboodle-iframes";
    iframeWrapper.innerHTML = `
      <iframe width="300" height="300" style="border:none" src="https://tabbygarf.neocities.org/tabbyads/embed.html" name="TabbyAds"></iframe>
      <iframe width="180" height="180" style="border:none" src="https://dimden.neocities.org/navlink/" name="neolink"></iframe>
      <iframe width="468" height="60" style="border:none" src="https://hbaguette.neocities.org/bannerlink/embed.html" name="bannerlink"></iframe>
    `;
    kaboodleItems.appendChild(iframeWrapper);
  }

  loadItems();

  function randomize(creatives){
    for(var i = creatives.length - 1; i > 0; i--){
      var swapIndex = getRandomInt(0, i + 1);
      var tmp = creatives[swapIndex];
      creatives[swapIndex] = creatives[i];
      creatives[i] = tmp;
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
})(window);
