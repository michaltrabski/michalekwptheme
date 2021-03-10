<?php

$roots_includes = array(
    '/functions/ajax.php',
    '/functions/custom-post-type.php'
);

foreach ($roots_includes as $file) {
    if (!$filepath = locate_template($file)) {
        trigger_error("Error locating `$file` for inclusion!", E_USER_ERROR);
    }

    require_once $filepath;
}
unset($file, $filepath);



// INITIAL SETUP WHEN THEME IS ACTIVATED FIRST TIME 
function michalekwptheme_change_permalinks()
{
    $set_id = "grkolfmlasdfjwosdf";
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
add_action('init', 'michalekwptheme_change_permalinks');











// ADD CSS JAVASCRIPT
function michalekwptheme_register_styles_and_scripts()
{
    $version = wp_get_theme()->get("Version");

    // CSS 
    wp_enqueue_style("mtrabski", get_stylesheet_directory_uri() . "/css/bundle.css", array(), $version, "all");
    wp_enqueue_style("font-awesome", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css", array(), $version, "all");

    // JS 
    wp_enqueue_script("bootstrap5", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js", array(), $version, true);
    // wp_enqueue_script("michalekwptheme", get_stylesheet_directory_uri() . "/js/bundle.js", array(), $version, true);

}
add_action("wp_enqueue_scripts", "michalekwptheme_register_styles_and_scripts");











// [year] 
add_action('init', 'michalekwptheme_register_post_type', 0);

// SHORTCODES START
function michalekwptheme_shortcode_print_year($atts)
{
    return date("Y");
}
add_shortcode('year', 'michalekwptheme_shortcode_print_year');

function michalekwptheme_shortcode_show_posts($atts, $content = null)
{

    global $post;

    extract(shortcode_atts(array(
        'cat'     => '',
        'per_page'     => '5',
        'order'   => 'DESC',
        'orderby' => 'post_date',
        'title'   =>  ''
    ), $atts));

    $args = array(
        'cat'            => $cat,
        'posts_per_page' => $per_page,
        'order'          => $order,
        'orderby'        => $orderby
    );

    $output = '<a class="list-group-item list-group-item-action active disabled"<a href="#">' . $title . '</a>';
    $posts = get_posts($args);
    foreach ($posts as $post) {
        setup_postdata($post);
        $output .= '<a class="list-group-item list-group-item-action"<a href="' . get_the_permalink() . '">' . get_the_title() . '</a>';
    }

    wp_reset_postdata();

    return '<div class="mb-3"><div class="list-group">' . $output . '</div></div>';
}
// [show_posts per_page="20"] 
add_shortcode('show_posts', 'michalekwptheme_shortcode_show_posts');
// SHORTCODES END