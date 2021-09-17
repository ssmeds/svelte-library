var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ssmeds/svelte-library.git', // Update to point to your repository  
    user: {
      name: 'ssmeds', // update to use your name
      email: 'stina_smeds@hotmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)