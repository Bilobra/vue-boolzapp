const contacts = [
    {
        name: 'Michele',
        avatar: './assets/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './assets/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './assets/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './assets/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './assets/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './assets/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './assets/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './assets/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const app = new Vue({
    el: '#app',

    data: {
        contacts,
        currentIndex: 0,

        activeContact: contacts[0],

        newMessage: '',

        userFinder: '',
        
    },

    computed:{
        contactsFilter(){
            return this.contacts.filter((el) => el.name.toLowerCase().includes(this.userFinder.toLowerCase()))
        }
    },



    methods: {

        // nextIndex(index) {
        //     this.currentIndex = index
        // },

        // al posto dell'indice setto il contatto corrente 
        setActivecontact(contact) {
            this.activeContact = contact

        },

        addMessage() {

            // creo const per verificare con if e trim del mio messaggio input legato al v-model
            const cleanedText = this.newMessage.trim()

            if (cleanedText === '') return

            // salvo in una variabile il this corrispondente al conttto corrente,
            // cos?? che il set interval venga applicato alla chat del contatto corrente
            const messages = this.activeContact.messages

            // creo const per salvare il mio obj creato con input
            const message = {
                date: '',
                message: cleanedText,
                status: 'sent',
            };

            //    pusho nell'array
            messages.push(message)

            // resetto il messaggio legato al v-model

            this.newMessage = '';

            // creo obj utomatico e lo pusho nello stesso array
            setTimeout(() => {
                const message = {
                    date: '',
                    message: 'ok',
                    status: 'received',
                };
                messages.push(message)


            }, 1000);


        },

        // filterContacts() {
        //     this.filteredContacts = this.contacts.filter((el) => {
        //         return el.name.toLowerCase().includes(this.userFinder.toLowerCase());
        //     })
        // },

        // showVisible (){
        //     this.activeContact.visible = !this.activeContact.visible
        // }



    },

    
})