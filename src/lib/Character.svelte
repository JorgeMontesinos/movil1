<script>
    import { esPC } from '../screenAncho.js';
    export let character
    
    console.log($esPC)
    function nombreLargo()
    {
        if($esPC)  
        {
            return character.name                
        }
        else
        {  
            if(character.name.length>21)
            {
                return character.name.substring(0,20)+"."
            }
            else{
                return character.name;
            }
        }
        
      }
   $: nombrex=nombreLargo()
</script>
<div class="character" >
    <img src={character.image} alt={character.name}>
    <span 
        class="{ $esPC   ? 'nombre':'nombreñ'}">
        {nombrex}        
    </span>

</div>
