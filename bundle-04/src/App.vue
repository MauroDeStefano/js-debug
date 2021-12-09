<template>
    <div id="app">
        <Header :genres="genresList" :authors="authorsList" @changedGenre="startGenreSearch" @changedAuthor="startAuthorSearch" />

        <Main :selectedGenre="genreToSearch" :selectedAuthor="authorToSearch" @genresAndAuthorsReady="getGenresAndAuthorsList" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            genresList: [],
            authorsList: [],
            genreToSearch: "",
            authorToSearch: "",
        };
    },

    methods: {
        getGenresAndAuthorsList(allGenresAndAuthors) {
            let prova = allGenresAndAuthors.genres;
            for(let i= 0; i < prova.length; i++){
                if( this.genresList === []){
                    this.genresList.push(prova[i].genres);
                }
                if (!this.genresList.includes(prova[i].genres)){
                    this.genresList.push(prova[i].genres);
                }
            }

            this.genresList = prova;

            // this.genresList = allGenresAndAuthors.genres;
            
            this.authorsList = allGenresAndAuthors.authors;
        },
        startGenreSearch(genreToSearch) {
            console.log(genreToSearch);
            this.genreToSearch = genreToSearch;
        },
        startAuthorSearch(authorToSearch) {
            console.log(authorToSearch);
            this.authorToSearch = authorToSearch;
        }
    },
    
};
</script>

<style lang="scss">
@import "./assets/styles/general";
</style>
