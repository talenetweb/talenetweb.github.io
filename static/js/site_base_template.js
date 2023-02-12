    const theme_button = document.querySelector(".theme_change_switch");
    const light_theme_str = 'dh_light_theme';
    const dark_theme_str = 'dh_dark_theme';
    const dark_theme_css_class_name = "dark-theme";

    window.onload = function() {
      init_disp_theme();
    };

    function init_disp_theme(){
        document.body.classList.add(dark_theme_css_class_name);
    }
