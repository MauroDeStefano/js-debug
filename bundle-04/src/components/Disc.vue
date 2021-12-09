<template>
    <div class="disc p-3 text-center">
        <div class="p-3">
            <img class="img-fluid mb-3" :src="disc.poster" :alt="disc.name" />
            <!-- disc.poster era scritto discs.poster -->
            <p class="title text-uppercase fw-bold">{{ disc.title }}</p>
            <p class="author lead mb-0">{{ disc.author }}</p>
            <!-- MANCAVA UNA GRAFFA QUI         ♥          -->
            <p class="year">{{ disc.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Disc",
    props: {
        disc: Object,
        // questo era impostato come array
    },
};
</script>

<style lang="scss" scoped>
.disc {
    flex-basis: calc(100% / 5 - 20px);
    height: 400px;
    margin: 10px;

    .author,
    .year {
        color: #7d7977;
    }
}

div {
    background-color: #2e3a46;
    height: 100%;
}
</style>