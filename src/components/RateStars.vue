<template>
    <div>
        <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" class="btn btn-outline-secondary">
                <span class='bi bi-star'></span>
            </button>
            <button type="button" class="btn btn-outline-secondary">
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
