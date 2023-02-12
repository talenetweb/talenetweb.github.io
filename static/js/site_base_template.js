    const theme_button = document.querySelector(".theme_change_switch");
    const light_theme_str = 'dh_light_theme';
    const dark_theme_str = 'dh_dark_theme';
    const dark_theme_css_class_name = "dark-theme";

    // Listen for a click on the button
    theme_button.addEventListener("change", function() {
      toggle_disp_theme();
      //document.body.classList.toggle("dark-theme");
      //console.log('theme changed')
    });

    window.onload = function() {
      init_disp_theme();
    };

    function init_disp_theme(){
      let dhn_selected_theme_val = window.localStorage.getItem('dhn_selected_theme');
      if (dhn_selected_theme_val == null) {
        // Select dark theme
        document.body.classList.add(dark_theme_css_class_name);
      } else if (dhn_selected_theme_val == light_theme_str){
        // Remove dark theme
        document.body.classList.remove(dark_theme_css_class_name);
      } else if (dhn_selected_theme_val == dark_theme_str){
        // Select dark theme
        document.body.classList.add(dark_theme_css_class_name);
      } else {
        // Remove dark theme
        document.body.classList.remove(dark_theme_css_class_name);
      }
    }

    function toggle_disp_theme() {
      let dhn_selected_theme_val = window.localStorage.getItem('dhn_selected_theme');

      if ((dhn_selected_theme_val == null) || (dhn_selected_theme_val == light_theme_str)){
        window.localStorage.setItem('dhn_selected_theme', dark_theme_str);
      } else {
        window.localStorage.setItem('dhn_selected_theme', light_theme_str);
      }

      init_disp_theme();
    }