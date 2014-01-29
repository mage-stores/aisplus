(function($) {
    $.widget('ais.menu', $.ui.menu, {
        options: {
            columnWidth: 200
        },
        delay: 0,
        _create: function() {
            this._super();
            this._createCollumns();
        },
        _createCollumns: function() {
            var column,
                columnCount = 0,
                options = this.options;
            this.element.find(this.options.menus).each(function() {
                var childItems = $(this).find('.ui-menu-item');
                childItems.each(function(index, item) {
                    if (index === 0 || (index % 10 && index !== childItems.length - 1)) {
                        column = column ?
                            column.add(item):
                            $(item);
                    } else {
                        columnCount++;
                        column = column.add(item);
                        column.wrapAll($('<p />', {class: 'nav-column'}).css({width: options.columnWidth}));
                        column = null;
                    }
                });
                $(this).css({"min-width": (options.columnWidth * (columnCount || 1))});
                columnCount = 0;
            });
        }
    })
})(jQuery)