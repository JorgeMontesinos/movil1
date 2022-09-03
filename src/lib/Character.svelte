<script>
    export let character
    function nombreLargo(){
        if(character.name.length>16)
        {
            console.log(character.name.length)
            console.log("L-->"+character.name)
            return character.name.substring(0,15)+"."
        }
        else
        {
            console.log(character.name.length)
            console.log("-",character.name)
            return character.name
            
        }
    }
   $: nombrex=nombreLargo()
</script>
<div class="character">
    <img src={character.image} alt={character.name}>
    <span class="nombres">{nombrex}</span>
</div>