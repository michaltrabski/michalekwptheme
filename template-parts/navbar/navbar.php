<nav class="navbar navbar-light navbar-expand-lg shadow fixed-top bg-white">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?php bloginfo('url'); ?>">
            <i class="fas fa-graduation-cap text-primary"></i>
            <?php bloginfo('name'); ?>
        </a>
        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mt__navbar" aria-controls="mt__navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="mt__navbar">



            <?php

            /**
             * Setup query to show the ‘services’ post type with all posts filtered by 'home' category.
             * Output is linked title with featured image and excerpt.
             */

            $args = array(
                'post_type' => 'menu',
                'post_status' => 'publish',
                'posts_per_page' => 1,
                'orderby' => 'date',
                'order' => 'DESC',
                // 'cat' => 'home',
            );

            $loop = new WP_Query($args);

            while ($loop->have_posts()) : $loop->the_post();
                the_content();
            endwhile;

            wp_reset_postdata();
            ?>


            <div class="d-flex">
                <button type="button" class="mt__search-modal--open btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#mt__search-modal">
                    <span>Szukaj </span>
                    <i class="fas fa-search"></i>
                </button>
                <a href="<?php bloginfo('url'); ?>/koszyk" class="btn btn-warning me-2">
                    <span>Koszyk </span>
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="<?php bloginfo('url'); ?>/logowanie" class="btn btn-warning">Logowanie</a>
            </div>
        </div>
    </div>
</nav>