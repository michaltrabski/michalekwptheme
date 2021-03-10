<?php get_header(); ?>

<main>
    <section class="bg-light">
        <div class="mt__maxwidth">
            <div class="container-fluid pt-3 pb-5" style="max-width: 1200px;margin:auto;">
                <div class="row">
                    <div class="col-md-8 bg-white">
                        <?php if (have_posts()) : ?>

                            <?php while (have_posts()) : the_post(); ?>
                                <article class="mb-4" id="<?php echo get_post_type(); ?>-<?php the_ID(); ?>" <?php post_class(); ?>>
                                    <!-- TITLE  -->

                                    <h2 class="mt__<?php echo get_post_type(); ?>-title ">
                                        <a href="<?php echo get_permalink() ?>" class="text-dark text-decoration-none">
                                            <?php the_title(); ?>
                                        </a>
                                    </h2>
                                    <a href="<?php echo get_permalink() ?>" class="btn btn-primary">Czytaj całość</a>

                                </article>
                            <?php endwhile; ?>

                            <div class="mt__pagination">
                                <?php the_posts_pagination(array(
                                    'mid_size'  => 1,
                                    'prev_text' => __('Poprzednia', 'textdomain'),
                                    'next_text' => __('Następna', 'textdomain'),
                                )); ?>
                            </div>

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