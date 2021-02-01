<?php

function michalekwptheme_register_scripts()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_script("michalekwptheme", get_stylesheet_directory_uri() . "/js/bundle.js", array(), $version, true);
}
add_action("wp_enqueue_scripts", "michalekwptheme_register_scripts");




function michalekwptheme_add_post()
{
    $postTitle = $_POST['post_title'];
    $postContent = $_POST['post_content'];
    $postType = $_POST['post_type'];

    // Create post object
    $my_post = array(
        "ID" => 0,
        'post_title'    => $postTitle,
        'post_content'  => $postContent,
        'post_status'   => 'publish',
        'post_type'  => $postType,
    );

    wp_insert_post($my_post);

    echo "success",
    wp_die();
}
add_action('wp_ajax_michalekwptheme_add_post', 'michalekwptheme_add_postt');
add_action('wp_ajax_nopriv_michalekwptheme_add_post', 'michalekwptheme_add_post');






// // disable for posts
// // add_filter('use_block_editor_for_post', '__return_false', 10);

// // add_filter('use_block_editor_for_post', '__return_false', 5);








// function mtrabski_theme_support()
// {
//     add_theme_support('title-tag');    // adds dynamic title meta tag in header.php, require wp_head() inside header to work
//     add_theme_support('custom-logo');  // allowes to add custom image as logo inside wp-admin/customize.php site identity
//     add_theme_support('post-thumbnails');
// }
// add_action("after_setup_theme", "mtrabski_theme_support");





// function mtrabski_register_menus()
// {
//     $locations = array(
//         "main" => "Top nenu (main)",
//         // "footer" => "Footer menu items"
//     );
//     // $locations["primary"] = "Desktop primary left sidebar";
//     // $locations["footer"] = "Footer menu items";

//     register_nav_menus($locations);
// }
// add_action("init", "mtrabski_register_menus");





// function mtrabski_register_styles()
// {
//     $version = wp_get_theme()->get("Version");
//     wp_enqueue_style("mtrabski-bundle", get_template_directory_uri() . "/css/mt-bundle.css", array(), $version, "all");
//     wp_enqueue_style("mtrabski-style", get_template_directory_uri() . "/style.css", array("mtrabski-bundle"), $version, "all");
// }
// add_action("wp_enqueue_scripts", "mtrabski_register_styles");





// function mtrabski_register_scripts()
// {
//     wp_enqueue_script("mtrabski-popper", "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), 1.0, true);
//     wp_enqueue_script("mtrabski-bootstrap5", "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js", array(), 1.0, true);
//     wp_enqueue_script("mtrabski", get_template_directory_uri() . "/js/mt-bundle.js", array(), 1.0, true);
// }
// add_action("wp_enqueue_scripts", "mtrabski_register_scripts");





// function mtrabski_edit_front_page()
// {
//     // // this is how you get access to the database
//     // global $wpdb;
//     // // get the id value which has been posted
//     $key = $_POST['key'];
//     $value = $_POST['value'];


//     // // Get a global post reference
//     // global $post;
//     // // Get the post object for the specified post
//     // $post = get_post($post_id);
//     // // Echo the previous post ID
//     // echo get_previous_post()->ID;
//     // // close the connection

//     $value_was_updated = update_option($key, htmlentities(stripslashes($value)));

//     $read_value = html_entity_decode(get_option($key));
//     //     update_option('my_option', htmlentities(stripslashes($_REQUEST['my_option'])));
//     // And this is what it looks like when I retrieve an option:

//     // html_entity_decode(get_option('my_option',htmlentities($my_default_value)));


//     wp_send_json((object) [
//         'massage' => 'success',
//         "key" => $key,
//         "value" => $value,
//         'value_was_updated' => $value_was_updated,
//         'read' => $read_value
//     ]);

//     wp_die();
// }
// add_action('wp_ajax_mtrabski_edit_front_page', 'mtrabski_edit_front_page');
// add_action('wp_ajax_nopriv_mtrabski_edit_front_page', 'mtrabski_edit_front_page');



// function mtrabski_enqueue_media_uploader()
// {
//     //this function enqueues all scripts required for media uploader to work
//     wp_enqueue_media();
// }
// add_action("wp_enqueue_scripts", "mtrabski_enqueue_media_uploader");



// // polylang functions start
// if (!function_exists("pll_current_language")) {
//     function pll_current_language()
//     {
//         return "pl"; // here define default language return by this function
//     }
// }

// if (!function_exists("pll_the_languages")) {
//     function pll_the_languages()
//     {
//         return null;
//     }
// }
// // polylang functions end