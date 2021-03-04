<?php
/*
Template Name: FULL WIDTH PAGE
*/
get_header(); ?>

<main>
    <section class="bg-light">
        <div class="mt__maxwidth">
            <div class="container-fluid pt-3 pb-5" style="max-width: 1200px;margin:auto;">
                <div class="row">
                    <div class="col bg-white">
                        <?php if (have_posts()) : ?>
                            <?php while (have_posts()) : the_post(); ?>
                                <article id="<?php echo get_post_type(); ?>-<?php the_ID(); ?>" <?php post_class(); ?>>
                                    <!-- TITLE  -->
                                    <h1 class="mt__<?php echo get_post_type(); ?>-title text-center"><?php the_title(); ?></h1>

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
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>