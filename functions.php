<?php

// SHORTCODES
function print_year($atts)
{
    return date("Y");
}
add_shortcode('year', 'print_year');




// if (!function_exists('michalekwptheme_register_nav_menu')) {
//     function michalekwptheme_register_nav_menu()
//     {
//         register_nav_menus(array(
//             'top_menu' => __('Menu górne', 'text_domaina')
//         ));
//     }
//     add_action('after_setup_theme', 'michalekwptheme_register_nav_menu', 0);
// }




function michalekwptheme_ajax_update_option()
{
    $blogname = $_POST['blogname'];
    if ($blogname) {
        update_option("blogname", $blogname);
    }

    $blogdescription = $_POST['blogdescription'];
    if ($blogdescription) {
        update_option("blogdescription", $blogdescription);
    }

    $wordpress_theme = $_POST['wordpress_theme'];
    if ($wordpress_theme) {
        update_option("template", $wordpress_theme);
        update_option("stylesheet", $wordpress_theme);
    }

    // $permalink_structure = $_POST['permalink_structure'];
    // global $wp_rewrite;
    // $wp_rewrite->set_permalink_structure('/%postname%/');
    // $wp_rewrite->flush_rules();

    wp_die();
}
add_action('wp_ajax_michalekwptheme_ajax_update_option', 'michalekwptheme_ajax_update_option');
add_action('wp_ajax_nopriv_michalekwptheme_ajax_update_option', 'michalekwptheme_ajax_update_option');








// SET ONCE WORDPRESS OPTIONS PROGRAMATICALY
function michalekwptheme_change_permalinks()
{
    $set_id = "asd";
    $allready_set = get_option("michalekwptheme_set_options_once");

    if ($allready_set !== $set_id) {
        global $wp_rewrite;
        $wp_rewrite->set_permalink_structure('/%postname%/');
        $wp_rewrite->flush_rules();

        update_option("michalekwptheme_set_options_once", $set_id);

        // add pages that are required
        // michalekwptheme_add_content("page", "Logowanie", "Zaloguj się", 'page-contact.php');
        // michalekwptheme_add_content("page", "Rejestracja", "Zarejestruj się");
        // michalekwptheme_add_content("page", "Przypomnienie hasła", "Przypomnienie hasła");
        // michalekwptheme_add_content("page", "Kontakt", "kontakt będzie tutaj");
        // michalekwptheme_add_content("page", "Koszyk", "Twój koszyk jest pusty");
        // michalekwptheme_add_content("page", "Regulamin", "Regulamin");
        // michalekwptheme_add_content("page", "Polityka prywatności", "Polityka prywatności");
    }
}
// add_action('init', 'michalekwptheme_change_permalinks');


function michalekwptheme_ajax_add_content()
{
    $postType = $_POST['post_type'];
    $postTitle = $_POST['post_title'];
    $postContent = $_POST['post_content'];
    $pageTemplate = $_POST['page_template'];

    michalekwptheme_add_content($postType, $postTitle, $postContent, $pageTemplate);


    // $page = get_page_by_title($postTitle, OBJECT, $postType);
    // $id = $page->ID;

    // // Create post object.
    // $my_post = array(
    //     "ID" => $id,
    //     'post_title'    => $postTitle,
    //     'post_content'  => $postContent,
    //     'post_status'   => 'publish',
    //     'post_type'  => $postType,
    //     'page_template'  => $pageTemplate
    // );
    // wp_insert_post($my_post);
    // echo $id;
    wp_die();
}
add_action('wp_ajax_michalekwptheme_ajax_add_content', 'michalekwptheme_ajax_add_contentt');
add_action('wp_ajax_nopriv_michalekwptheme_ajax_add_content', 'michalekwptheme_ajax_add_content');


function michalekwptheme_add_content($postType, $title, $content, $pageTemplate = "")
{
    $page = get_page_by_title($title, OBJECT, $postType);
    $id = $page->ID;

    wp_insert_post(array(
        "ID" => $id,
        'post_title'    => $title,
        'post_content'  => $content,
        'post_status'   => 'publish',
        'post_type'  => $postType,
        'page_template'  => $pageTemplate
    ));
};



// ADD CSS 
function michalekwptheme_register_styles()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_style("mtrabski", get_stylesheet_directory_uri() . "/css/bundle.css", array(), $version, "all");
    wp_enqueue_style("font-awesome", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css", array(), $version, "all");
}
add_action("wp_enqueue_scripts", "michalekwptheme_register_styles");


// ADD JAVASCRIPT
function michalekwptheme_register_scripts()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_script("bootstrap5", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js", array(), $version, true);
    // wp_enqueue_script("michalekwptheme", get_stylesheet_directory_uri() . "/js/bundle.js", array(), $version, true);
}
add_action("wp_enqueue_scripts", "michalekwptheme_register_scripts");












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








function michalekwptheme_register_post_type()
{
    $custom_post_types = [
        array("name" => "Menu górne", "slug" => "menu"),
        array("name" => "Footer", "slug" => "footer")
    ];

    for ($i = 0; $i < count($custom_post_types); $i++) {
        $custom_post_type_args = array(
            'label'               => "lebel",
            'description'         => "opisssss",
            'labels'              => array(
                'name'                => $custom_post_types[$i]["name"],
                'singular_name'       => $custom_post_types[$i]["name"],
                // 'menu_name'           => __('Movies', 'twentytwenty'),
                // 'parent_item_colon'   => __('Parent Movie', 'twentytwenty'),
                'all_items'           => "Elementy top menu",
                'view_item'           => "Zobacz elementy top menu",
                'add_new_item'        => "Dodaj element",
                'add_new'             => "Dodaj element",
                'edit_item'           => "Edytuj element top menu",
                // 'update_item'         => __('Update Movie', 'twentytwenty'),
                'search_items'        => "Wyszukaj element top menu",
                'not_found'           => "Nie znaleziono elementu top menu",
                'not_found_in_trash'  => "Nie znaleziono elementu top menu w koszu",
            ),
            // Features this CPT supports in Post Editor
            'supports'            => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',),
            // You can associate this CPT with a taxonomy or custom taxonomy. 
            // 'taxonomies'          => array('genres'),
            /* A hierarchical CPT is like Pages and can have
            * Parent and child items. A non-hierarchical CPT
            * is like Posts.
            */
            'hierarchical'        => false,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_nav_menus'   => true,
            'show_in_admin_bar'   => true,
            'menu_position'       => 5,
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'capability_type'     => 'post',
            'show_in_rest' => true,

        );
        register_post_type($custom_post_types[$i]["slug"], $custom_post_type_args);
    }
}
add_action('init', 'michalekwptheme_register_post_type', 0);
