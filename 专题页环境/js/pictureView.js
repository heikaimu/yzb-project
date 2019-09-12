$(document)
  .off("click", ".photo-img")
  .on("click", ".photo-img", function () {
    document.body.style.overflowY = 'hidden';
    const src = $(this).attr("_src");
    var photoView = document.createElement("div");
    photoView.id = "photoView";
    photoView.style.position = "fixed";
    photoView.style.left = 0;
    photoView.style.right = 0;
    photoView.style.top = 0;
    photoView.style.bottom = 0;
    photoView.style.zIndex = 999999;
    photoView.style.background =
      "url(" + src + ") rgba(0,0,0,0.6) no-repeat center center";
    var closeBtn = document.createElement("div");
    closeBtn.id = "photoViewClose";
    closeBtn.style.width = "40px";
    closeBtn.style.height = "40px";
    closeBtn.style.position = "fixed";
    closeBtn.style.background =
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABW0lEQVRYR9WX7XHCMBBEdysI6YB0khJIB1AR6SDpIHSQlJISoIJjjrE8smNJd4cZO/7lYYze0+lziewRkVeSP/lvc7+LyJbkb2qX+iIiewBHABsAZwAHkqc54SKyA/CRMd60s0lAoU8joEp8ziHRdVDh+XMm+UwtO4DvAuhuiQI84V5qFUgfhSUa8AvJTRLQ8fmqlNst0YArSufA6SaQTcTxOOVOZgkDvG+rF5hLwgNX5kDgXgkvfFIgKhGBFwW8ElF4VcAq0c3S8OT9MwfGS9HQu9pm2Vw5TQFjJaYkmvDmEOStOithgrsEHJUww/+XwKJD4IS7TtHmKgjCzRJVAQP88LCNyAJPVzbPt+MNY7ICkQYj/1nfcRzthXPHHGxU67iSdaFhuUupiEwFE/NaLp3HjSFdfzBxnWq1W0mhEoNgouH0vcuHFwD7B4VTzZqaQZWx68Npsl8inl8B9yUOaj27MmMAAAAASUVORK5CYII=') no-repeat center center / 60%";
    closeBtn.style.right = 0;
    closeBtn.style.top = 0;
    photoView.appendChild(closeBtn);
    $("body").append(photoView);
    $(photoView).click(function() {
      $(this).remove();
    })
  });
