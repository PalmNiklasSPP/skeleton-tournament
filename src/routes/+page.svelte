
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
			<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
				
				<!-- Detailed -->
				<a class="card bg-initial card-hover overflow-hidden" href="/elements/cards">
					<header>
						<img src="src\lib\grid_0.png" class="bg-black/50 w-full " alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h6 class="h6" data-toc-ignore>Announcements</h6>
						<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
						<article>
							<p>
								<!-- cspell:disable -->
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
								sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
								<!-- cspell:enable -->
							</p>
						</article>
					</div>
					<hr class="opacity-50" />
					<footer class="p-4 flex justify-start items-center space-x-4">
						<!-- <Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" /> -->
						<div class="flex-auto flex justify-between items-center">
							<h6 class="font-bold" data-toc-ignore>By Alex</h6>
							<small>On {new Date().toLocaleDateString()}</small>
						</div>
					</footer>
				</a>
			</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
