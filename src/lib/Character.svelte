<script>
    export let character
    
    function nombreLargo(){
        if(character.name.lenght>16)
        {
            const nnxx=character.name.substring(0,15)
            return nnxx
        }
        else
        {
            return character.name
            
        }
    }
</script>
<div class="character">
    <img src={character.image} alt={character.name}>
    <span class="nombres">{nombreLargo}</span>
</div>