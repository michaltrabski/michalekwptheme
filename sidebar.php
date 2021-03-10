<?php

/**
 * Setup query to show the ‘services’ post type with all posts filtered by 'home' category.
 * Output is linked title with featured image and excerpt.
 */

$args = array(
    'post_type' => 'sidebar',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order' => 'ASC',
);

$loop = new WP_Query($args);

while ($loop->have_posts()) : $loop->the_post();
    the_content();
endwhile;

wp_reset_postdata();
