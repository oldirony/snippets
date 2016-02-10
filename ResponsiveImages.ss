<picture>
	<source media="(min-width: 1000px)" srcset="$MyImage.Fill(1200,450).getAbsoluteURL" />
	<source media="(min-width: 640px)" srcset="$MyImage.Fill(1000, 600).getAbsoluteURL" />
	<source media="(max-width: 639px)" srcset="$MyImage.Fill(640,320).getAbsoluteURL" />
	<img src="$MyImage.Fill(1200,450).getAbsoluteURL" />
</picture>
