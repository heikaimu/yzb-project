$(document)
  .off("click", ".video-play")
  .on("click", ".video-play", function () {
    document.body.style.overflowY = 'hidden';
    var src = $(this).attr("_src");
    var title = $(this).attr("_title");
    var videoView = document.createElement("div");
    videoView.id = "videoView";
    videoView.style.position = "fixed";
    videoView.style.left = 0;
    videoView.style.right = 0;
    videoView.style.top = 0;
    videoView.style.bottom = 0;
    videoView.style.zIndex = 999999;
    videoView.style.backgroundColor = 'rgba(0,0,0,0.6)';
    videoView.style.display = "flex";
    videoView.style.justifyContent = "center";
    videoView.style.alignItems = "center";
    var videoContent = document.createElement("div");
    videoContent.style.padding = "20px";
    videoContent.style.backgroundColor = "#fff";
    videoContent.style.borderRadius = "4px";
    var videoTitle = document.createElement("h3");
    videoTitle.style.backgroundColor = "#fff";
    videoTitle.style.padding = "0 0 20px 0";
    videoTitle.style.fontSize = "20px";
    videoTitle.innerText = title;
    videoContent.appendChild(videoTitle);
    var video = document.createElement("video");
    video.src = src;
    video.width = 600;
    video.height = 400;
    video.controls = "controls";
    video.style.backgroundColor="#000";
    videoContent.appendChild(video);
    videoView.appendChild(videoContent);
    var closeBtn = document.createElement("div");
    closeBtn.id = "videoViewClose";
    closeBtn.style.width = "40px";
    closeBtn.style.height = "40px";
    closeBtn.style.position = "fixed";
    closeBtn.style.background =
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABW0lEQVRYR9WX7XHCMBBEdysI6YB0khJIB1AR6SDpIHSQlJISoIJjjrE8smNJd4cZO/7lYYze0+lziewRkVeSP/lvc7+LyJbkb2qX+iIiewBHABsAZwAHkqc54SKyA/CRMd60s0lAoU8joEp8ziHRdVDh+XMm+UwtO4DvAuhuiQI84V5qFUgfhSUa8AvJTRLQ8fmqlNst0YArSufA6SaQTcTxOOVOZgkDvG+rF5hLwgNX5kDgXgkvfFIgKhGBFwW8ElF4VcAq0c3S8OT9MwfGS9HQu9pm2Vw5TQFjJaYkmvDmEOStOithgrsEHJUww/+XwKJD4IS7TtHmKgjCzRJVAQP88LCNyAJPVzbPt+MNY7ICkQYj/1nfcRzthXPHHGxU67iSdaFhuUupiEwFE/NaLp3HjSFdfzBxnWq1W0mhEoNgouH0vcuHFwD7B4VTzZqaQZWx68Npsl8inl8B9yUOaj27MmMAAAAASUVORK5CYII=') no-repeat center center / 60%";
    closeBtn.style.right = 0;
    closeBtn.style.top = 0;
    videoView.appendChild(closeBtn);
    $("body").append(videoView);
    $(videoView).click(function() {
      document.body.style.overflowY = 'auto';
      $(this).remove();
    })
  });
