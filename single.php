<?php get_header(); ?>

<main>
    <section class="bg-light">
        <div class="mt__maxwidth">
            <div class="container-fluid pt-3 pb-5" style="max-width: 1200px;margin:auto;">
                <div class="row">
                    <div class="col-md-8 bg-white">
                        <?php if (have_posts()) : ?>
                            <?php while (have_posts()) : the_post(); ?>
                                <article id="<?php echo get_post_type(); ?>-<?php the_ID(); ?>" <?php post_class(); ?>>
                                    <!-- TITLE  -->
                                    <h1 class="mt__<?php echo get_post_type(); ?>-title"><?php the_title(); ?></h1>

                                    <!-- TIME -->
                                    <time class="mt__<?php echo get_post_type(); ?>-time" datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished"><?php echo get_the_date(); ?></time>

                                    <!-- CONTENT  -->
                                    <div class="mt__<?php echo get_post_type(); ?>-content">
                                        <?php the_content(); ?>
                                    </div>
                                </article>
                            <?php endwhile; ?>

                        <?php else : ?>
                            <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                        <?php endif; ?>
                    </div>
                    <div class="col-md-4 bg-light"><?php get_sidebar(); ?></div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>