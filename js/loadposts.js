//Loading Latest Stories
$.getJSON(
  "https://spreadsheet.glitch.me/?key=1IMMk-7b-L7joK9GnoR_dB3616X8sr8_Ckz9qvD5v9DI",
  data => {
    console.log(data)
    let containerhtml = "";
    data.forEach(item => {
      containerhtml += template(item);
    });
    $("#latest").html(containerhtml)
  }
);

function template(item) {
  return `
  <div id="quote0" class="quote"> 
      <a href='${item["Story URL"]}'><img alt='Photo for story' class='img-responsive' src='${item["Image URL"]}'></a>
      <a href='${item["Story URL"]}'>${item.Title}</a>
      <p>${item.Descriptions}.</p>
  </div>
  <div id="quote1" class="quote"> 
      <a href='${item["Story URL"]}'><img alt='Photo for story' class='img-responsive' src='${item["Image URL"]}'></a>
      <a href='${item["Story URL"]}'>${item.Title}</a>
      <p>${item.Descriptions}.</p>
  </div>
  <div id="quote2" class="quote"> 
      <a href='${item["Story URL"]}'><img alt='Photo for story' class='img-responsive' src='${item["Image URL"]}'></a>
      <a href='${item["Story URL"]}'>${item.Title}</a>
      <p>${item.Descriptions}.</p>
  </div>
  `;
}

//Loading Featured Posts
$.getJSON(
  "https://spreadsheet.glitch.me/?key=1IMMk-7b-L7joK9GnoR_dB3616X8sr8_Ckz9qvD5v9DI",
  data => {
    console.log(data)
    let containerhtml = "";
    data.forEach(item => {
      containerhtml += template_1(item);
    });
    $("#news").html(containerhtml)
  }
);

function template_1(item) {
  return `
    <div class="row top-story">
      <div class="col-sm-5">
          <img alt="Photo for story" class="img-responsive" src="${item["Image URL"]}">
      </div>
      <div class="col-sm-7">
          <span class="pubdate">${item["Publish Date"]}</span>
          <span class="pubdate">${item["Media"]}</span>
          <h1 class="featured-video">
            <a href="${item["Story URL"]}">${item.Title}</a>
          </h1>
          <span class="byline">By ${item["Author Name"]}</span>
          <p class="lead-video"> ${item.Descriptions}
              <a href="${item["Story URL"]}">Read more</a>.</p>
      </div>
  </div>
  `;
}

//Loading Root Causes Posts
$.getJSON(
  "https://spreadsheet.glitch.me/?key=14UwvMiLf5S-IYjdiFCXk42i6Ve3Cwy-2i0Tc8G6YAFQ",
  data => {
    console.log(data)
    let containerhtml = "";
    data.forEach(item => {
      containerhtml += template_2(item);
    });
    $("#rootcauses").html(containerhtml)
  }
);

function template_2(item) {
  return `
    <li>
      <span class='pubdate'>${item["Publish Date"]}</span>
      <a href='${item["Story URL"]}'>${item.Title}</a>
      <span class='byline'>By ${item["Author Name"]} </span>
    </li>  
  `;
}