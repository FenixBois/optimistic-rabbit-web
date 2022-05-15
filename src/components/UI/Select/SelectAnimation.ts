export const subMenuAnimate = {
    enter: {
        opacity: 1,

        transition: {
            duration: 0.2,
        },
        display: 'block',
    },
    exit: {
        opacity: 0,

        transitionEnd: {
            duration: 0.2,

            display: 'none',
        },
    },
};