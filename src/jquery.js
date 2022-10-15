const { $ } = window;

function waitFor(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const $loadUserBtn = $('#sign_in');
const $userLoader = $('#user_loader');
const $userInfoContainer = $('#user_info');

$loadUserBtn.on('click', async () => {
  $userLoader.removeClass('hidden');

  await waitFor(3000); // Emulating network connection

  await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      $loadUserBtn.addClass('hidden');

      $userLoader.addClass('hidden');

      $userInfoContainer.append(`
        <div class="flex vertical">
          <h2 class="text size_xl weight600">${user.name}</h2>

          <span class="text size_xxs">${user.email}</span>

          <p class="text padding_t_m size_m">Phone: ${user.phone}</p>

          <p class="text padding_t_m size_m">Website: ${user.website}</p>
        </div>
      `);
    });
});

// ... ~2000 lines of code

$('#load_post').on('click', async () => {
  $('.loader').toggleClass('hidden');

  await waitFor(1000); // Emulating network connection

  await fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(post => {
      $('#load_post').toggleClass('hidden');

      $('.loader').toggleClass('hidden');

      $('#post_info').append(`
        <div class="flex vertical">
          <h2 class="text size_xl weight600">${post.title}</h2>

          <span class="text size_xxs">ID: ${post.id}</span>

          <p class="text padding_t_m size_m">${post.body}</p>
        </div>
      `);
    });
});
