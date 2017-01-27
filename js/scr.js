/**
 * Created by i9991 on 27.01.2017.
 */
(function (w, g) {
    w['GoogleAnalyticsObject'] = g;
    w[g] = w[g] || function () {
            (w[g].q = w[g].q || []).push(arguments)
        };
    w[g].l = 1 * new Date();
})(window, 'ga');

// Optional TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');