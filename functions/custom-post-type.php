<?php

// CUSTOM POST TYPES 

function michalekwptheme_register_post_type()
{
    $custom_post_types = [
        array("name" => "Menu górne", "slug" => "menu"),
        array("name" => "Footer", "slug" => "footer"),
        array("name" => "Sidebar", "slug" => "sidebar")
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
