var Route = {

    feed : function(id, size) {

        feed = '/skema.json?t=' + $.now();
        if (!data) feed = (id.length < size)? '/' + id + feed: feed;
        draw.getJSON();

    }

}
