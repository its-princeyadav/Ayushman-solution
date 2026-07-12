/* ================================
   Tabs widget (Elementor "arolax--tabs")
   ================================ */

const ArolaxTabs = function ($scope) {
  const $ = jQuery;

  $(".tab-content", $scope).hide();
  $(".tab-title:first", $scope).addClass("active").show();
  $(".tab-content:first", $scope).show();

  // mobile title
  const activeMobileTitle = $(".tab-title:first", $scope).attr("aria-controls");
  $(`.tab-title[aria-controls='${activeMobileTitle}']`, $scope).addClass("active");

  // On click event
  $(".tab-title", $scope).click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".tab-title", $scope).removeClass("active");
    $(this).addClass("active");
    $(".tab-content", $scope).hide();
    const activeTab = $(this).attr("aria-controls");

    $(`.tab-content[id='${activeTab}']`, $scope).fadeIn();
    $(`.tab-title[aria-controls='${activeTab}']`, $scope).addClass("active");
    return false;
  });
};

/* ================================
   Testimonial slider widget (Elementor "arolax--testimonial")
   ================================ */

const ArolaxTestimonial = function ($scope, $) {
  const slider = $($(".arolax_testimonial_slider", $scope)[0]);
  const sliderSettings =
    $($(".arolax_testimonial_wrapper", $scope)[0]).data("settings") || {};
  sliderSettings.handleElementorBreakpoints = true;

  new elementorFrontend.utils.swiper(slider, sliderSettings).then(
    (newSwiperInstance) => newSwiperInstance,
  );
};

/* ================================
   Elementor init: register both widgets in one listener
   ================================ */

jQuery(window).on("elementor/frontend/init", function () {
  elementorFrontend.hooks.addAction(
    "frontend/element_ready/arolax--tabs.default",
    ArolaxTabs,
  );

  elementorFrontend.hooks.addAction(
    "frontend/element_ready/arolax--testimonial.default",
    ArolaxTestimonial,
  );
});
