<script>
    import { esMovil } from '../screenAncho.js';
    export let character
    
  
    function nombreLargo()
    {
        if($esMovil)  //es movil?
        {  
            if(character.name.length>22)
            {
                return character.name.substring(0,21)+"."
            }
            else{
                return character.name;
            }
        }
        else
            {
               return character.name                
            }
  
    }
   $: nombrex=nombreLargo()
</script>
<div class="character" >
    <img src={character.image} alt={character.name}>
    <span 
        class="{ esMovil   ? 'nombreñ':'nombre'}">
        {nombrex}        
    </span>

</div>
