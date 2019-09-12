$(document)
  .off("click", ".photo-img")
  .on("click", ".photo-img", function () {
    document.body.style.overflowY = 'hidden';
    var src = $(this).attr("_src");
    var titleText = $(this).attr("_title");
    var photoView = document.createElement("div");
    photoView.id = "photoView";
    photoView.style.position = "fixed";
    photoView.style.left = 0;
    photoView.style.right = 0;
    photoView.style.top = 0;
    photoView.style.bottom = 0;
    photoView.style.zIndex = 999999;
    photoView.style.background = 'rgba(0,0,0,0.3)';
    var content = document.createElement('div');
    content.style.width = "1000px";
    content.style.height = "700px";
    content.style.position = "absolute";
    content.style.top = "50%";
    content.style.left = "50%";
    content.style.marginLeft = "-500px";
    content.style.marginTop = "-350px";
    content.style.background = "#fff";
    content.style.textAlign = "center";
    var title = document.createElement('h2');
    title.style.height = '44px';
    title.style.height = '44px';
    title.style.background = 'rgba(18,119,191,.1)';
    title.textContent = titleText;
    title.style.textAlign = "left";
    title.style.lineHeight = "44px";
    title.style.paddingLeft = "20px";
    title.style.fontSize = "20px";
    title.style.color = "#333";
    var closeBtn = document.createElement("div");
    closeBtn.id = "photoViewClose";
    closeBtn.style.width = "44px";
    closeBtn.style.height = "44px";
    closeBtn.style.position = "absolute";
    closeBtn.style.background =
      "url('data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABG0lEQVRYR+2WwQ2DMAxFvycom7QbFDaASckG0A3aTdjAVaogRVFIbHOgh3BEif3y/e2EcPFHF+dHA2gK/LcC0zStzHwDMDjnNk3HjOPYAVgAbM654WhvUQEPAODJzG8NxJ6ciB4AXvM89yYAH4iIPMRdCpEk/zBzX1Kv6gENhDa5V6UK4BdJICzJxQA1CGtyFcARRDDXEgxXrXlqRlEJ4k2ZcsCaXK3ADhJDhH/qk++x1ArspfBDJpwc0hbNzQI1QGq4EFQ8J055IOf2Xx2VwyqGECtQajXJnDCN4th0Uc2zhrNCVBXQDBkLRBFAkzzXopLuEF3HAFR9niixnn0PdLUrNWewCGIzvwc0LyDr2qoJrYGl+xpAU+ByBb7mLA4wrZx2xQAAAABJRU5ErkJggg==') no-repeat center center / 60%";
    closeBtn.style.right = 0;
    closeBtn.style.top = 0;
    title.appendChild(closeBtn);
    content.appendChild(title);
    var img = document.createElement("img");
    img.src = src;
    var imgBox = document.createElement("div");
    imgBox.style.paddingLeft = "50px";
    imgBox.style.paddingRight = "50px";
    imgBox.style.overflow = "auto";
    imgBox.style.height = "656px"
    imgBox.appendChild(img);
    content.appendChild(imgBox);
    photoView.appendChild(content);
    
    $("body").append(photoView);
  });

$(document)
  .off("click", "#photoView")
  .on("click", "#photoView", function () {
    document.body.style.overflowY = 'auto';
    $("#photoView").remove();
  });