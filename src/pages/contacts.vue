<template>
	<div>
		<main-header></main-header>

		<main class="main">
			<div class="container flex">
				<main class="content">
					<h3 class="h3 line-bottom">Contact Us</h3>
					<p class="paragraph__medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
						libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
						elementum imperdiet. Duis
						sagittis ipsum. Praesent mauris.</p>
					<p class="paragraph">
						Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui
						sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id
						ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis.
						Aenean sodales nibh non lectus tempor a interdum justo ultricies.
						Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue
						sapien, sodales ac bibendum ut, pellentesque id eros.</p>

					<contact-form></contact-form>

				</main> <!-- /main .content -->

				<aside-block></aside-block>

			</div> <!-- /container -->
		</main> <!-- /main -->

		<footer-block></footer-block>

	</div>
</template>

<script>
    import MainHeader from "../assets/components/the-header/the-header";
    import FooterBlock from "../assets/components/the-footer/footer-block";
    import AsideBlock from "../assets/components/aside-block/aside-block";
    import ContactForm from "../assets/components/contact-form/contact-form";
    export default {
        components: {ContactForm, AsideBlock, FooterBlock, MainHeader}
    }
</script>
