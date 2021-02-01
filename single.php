<!doctype html>
<html lang="pl">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
	<meta name="generator" content="Hugo 0.79.0">
	<title>post</title>

	<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">



	<!-- Bootstrap core CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

	<!-- Favicons -->
	<link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
	<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
	<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
	<link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
	<link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
	<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico">
	<meta name="theme-color" content="#7952b3">


</head>

<main class="bg-light" style="max-width: 1200px;margin:auto;">


	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
				<?php
				// get_header();



				/* Start the Loop */
				while (have_posts()) :
					the_post(); ?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

						<header class="entry-header alignwide">
							<?php the_title('<h1 class="entry-title">', '</h1>'); ?>
							<?php twenty_twenty_one_post_thumbnail(); ?>
						</header>

						<div class="entry-content">
							<?php
							the_content();

							wp_link_pages(
								array(
									'before'   => '<nav class="page-links" aria-label="' . esc_attr__('Page', 'twentytwentyone') . '">',
									'after'    => '</nav>',
									/* translators: %: page number. */
									'pagelink' => esc_html__('Page %', 'twentytwentyone'),
								)
							);
							?>
						</div><!-- .entry-content -->

						<footer class="entry-footer default-max-width">
							<?php twenty_twenty_one_entry_meta_footer(); ?>
						</footer><!-- .entry-footer -->

						<?php if (!is_singular('attachment')) : ?>
							<?php get_template_part('template-parts/post/author-bio'); ?>
						<?php endif; ?>

					</article><!-- #post-<?php the_ID(); ?> -->


				<?php
					// If comments are open or there is at least one comment, load up the comment template.
					if (comments_open() || get_comments_number()) {
						comments_template();
					}

					// Previous/next post navigation.
					$twentytwentyone_next = is_rtl() ? twenty_twenty_one_get_icon_svg('ui', 'arrow_left') : twenty_twenty_one_get_icon_svg('ui', 'arrow_right');
					$twentytwentyone_prev = is_rtl() ? twenty_twenty_one_get_icon_svg('ui', 'arrow_right') : twenty_twenty_one_get_icon_svg('ui', 'arrow_left');

					$twentytwentyone_next_label     = esc_html__('Next post', 'twentytwentyone');
					$twentytwentyone_previous_label = esc_html__('Previous post', 'twentytwentyone');

					the_post_navigation(
						array(
							'next_text' => '<p class="meta-nav">' . $twentytwentyone_next_label . $twentytwentyone_next . '</p><p class="post-title">%title</p>',
							'prev_text' => '<p class="meta-nav">' . $twentytwentyone_prev . $twentytwentyone_previous_label . '</p><p class="post-title">%title</p>',
						)
					);
				endwhile; // End of the loop.

				// get_footer();
				?>
			</div>
			<div class="col-md-4 bg-secondary">prawa kolumna</div>
		</div>

	</div>
</main>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


</body>

</html>