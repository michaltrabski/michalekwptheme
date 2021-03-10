<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
	<div class="input-group mb-3 input-group-lg">
		<span class="input-group-text"><i class="fas fa-search"></i></span>
		<input type="search" class="form-control" placeholder="Wpisz szukaną frazę..." value="<?php echo get_search_query(); ?>" name="s" />
		<input type="submit" class="btn btn-danger search-submit" value="Szukaj" />
	</div>
</form>