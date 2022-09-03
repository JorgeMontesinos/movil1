<script>
	import Character from './lib/Character.svelte';
    
    let characters=[]
    let page=1;
   function retro()
   {
    page--;
    loadCharacter()
   }
   function siguiente()
   {
    page++;
    loadCharacter()
   
   }
    async function loadCharacter(){
        const response  = await fetch("https://rickandmortyapi.com/api/character?page="+page)
        const data      = await response.json()
        characters= data.results
    }
    loadCharacter()

   
</script>
<main class="container">

    <h1 class="title">Rick Morty</h1>
    <div class="btns">
        <button class="btn" on:click={retro} disabled={page===1}>Previo</button>
        <button class="btn" on:click={siguiente}>Siguiente</button>
    </div>
    <div class="grid">
        {#each characters as character}
        <Character character={character}/>    
        {/each}
    </div>
</main>