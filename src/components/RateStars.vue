<template>
    <div>
        <div class="btn-group">
            <button type="button" :id="'star1_' + name" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" :id="'star2_' + name" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" :id="'star3_' + name" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" :id="'star4_' + name" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" :id="'star5_' + name" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            value: null
        }
    }
}
</script>
