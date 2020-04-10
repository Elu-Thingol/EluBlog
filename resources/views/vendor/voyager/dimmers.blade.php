@php
$dimmers = Voyager::dimmers();

$count = $dimmers->count();
$classes = [
    'col-xs-12',
    'col-sm-'.($count >= 2 ? '6' : '12'),
    'col-md-'.($count >= 3 ? '4' : ($count >= 2 ? '6' : '12')),
];
$class = implode(' ', $classes);
$prefix = "<div class='{$class}'>";
$surfix = '</div>';
@endphp
@if ($dimmers->any())
<div class="clearfix container-fluid row">
    {!! $prefix.$dimmers->setSeparator($surfix.$prefix)->display().$surfix !!}
</div>
@endif

<style>
    .page-content > .row {
    padding-left: 23px;
    padding-right: 8px;
    }
    
    .page-content > .row > [class*="col-"]:first-child {
    padding-left: 8px;
    }
    
    .page-content > .row > [class*="col-"]:last-child {
    padding-right: 8px;
    }
</style>
