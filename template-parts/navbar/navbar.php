<nav class="navbar navbar-light navbar-expand-lg shadow">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?php echo home_url(); ?>">
            <i class="bi bi-wrench text-white"></i>
            portalNaukiJazdy.pl
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="<?php echo home_url(); ?>">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Szkoły jazdy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Przepisy ruchu drogowego</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Przepisy ruchu drogowego</a>
                </li>
            </ul> -->
            <?php wp_nav_menu(array(
                'menu'                 => 'top_menu',
                'container'            => 'div',
                'container_class'      => '',
                'container_id'         => '',
                'container_aria_label' => '',
                'menu_class'           => 'menu',
                'menu_id'              => '',
                'echo'                 => true,
                'fallback_cb'          => 'wp_page_menu',
                'before'               => '',
                'after'                => '',
                'link_before'          => '',
                'link_after'           => '',
                'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'item_spacing'         => 'preserve',
                'depth'                => 0,
                'walker'               => '',
                'theme_location'       => '',
            )); ?>

            <form class="d-flex">
                <a href="<?php echo home_url(); ?>/koszyk" class="btn btn-warning me-2">Koszyk <i class="bi bi-cart"></i></a>

                <a href="<?php echo home_url(); ?>/logowanie" class="btn btn-warning">Logowanie</a>
            </form>
        </div>
    </div>
</nav>