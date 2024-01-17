# Components:

MainSearch: Modulo di ricerca che invia una query all'API e visualizza i risultati. 

Favorites: Mostra i lavori salvati nei preferiti. Usa Redux per gestire lo stato dei preferiti. Il handleRemove permette di rimuovere elementi dai preferiti. 

CompanySearchResults: Mostra i risultati di ricerca. Utilizza useParams per ottenere il nome dell'azienda dalla URL e invia una richiesta all'API quando la ricerca cambia.

Job: Gestisce l'aggiunta e la rimozione dei preferiti. 

# Reducers
favReducer, modifica lo stato dei preferiti in base alle azioni. 
jobReducer, aggiorna lo stato con i lavori ricevuti dall'API.

