<?php

// AJAX 

function michalekwptheme_ajax_add_content()
{
    $postType = $_POST['post_type'];
    $postDate = $_POST['post_date'];
    $postTitle = $_POST['post_title'];
    $postContent = $_POST['post_content'];
    $pageTemplate = $_POST['page_template'];

    michalekwptheme_add_content($postType, $postDate, $postTitle, $postContent, $pageTemplate);

    wp_die();
}
add_action('wp_ajax_michalekwptheme_ajax_add_content', 'michalekwptheme_ajax_add_contentt');
add_action('wp_ajax_nopriv_michalekwptheme_ajax_add_content', 'michalekwptheme_ajax_add_content');

function michalekwptheme_add_content($postType, $postDate, $title, $content, $pageTemplate = "")
{
    $page = get_page_by_title($title, OBJECT, $postType);
    $id = $page->ID;

    wp_insert_post(array(
        "ID" => $id,
        'post_title'    => $title,
        'post_date'    => $postDate,
        'post_content'  => $content,
        'post_status'   => 'publish',
        'post_type'  => $postType,
        'page_template'  => $pageTemplate
    ));
};

function michalekwptheme_ajax_update_option()
{
    $topMenuHtml = $_POST['mt_top_menu_html'];
    if ($topMenuHtml) {
        update_option("mt_top_menu_html", $topMenuHtml);
    }

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

    wp_die();
}
add_action('wp_ajax_michalekwptheme_ajax_update_option', 'michalekwptheme_ajax_update_option');
add_action('wp_ajax_nopriv_michalekwptheme_ajax_update_option', 'michalekwptheme_ajax_update_option');
