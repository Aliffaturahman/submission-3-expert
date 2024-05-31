const DrawerInitiator = {
  init({ button, nav, content }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, nav);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, nav);
    });
  },

  toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('open');
  },

  closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('open');
  },
};

export default DrawerInitiator;
