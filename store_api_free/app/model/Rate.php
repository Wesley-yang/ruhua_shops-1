<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/10/16 0016
 * Time: 15:12
 */

namespace app\model;


use bases\BaseModel;
use exceptions\OrderException;

class Rate extends BaseModel
{
    protected $type=['reply_time'=>'timestamp'];
    public function user()
    {
        return $this->belongsTo('User','user_id','id')->field('id,nickname,headpic');
    }

    public function goods()
    {
        return $this->belongsTo('Goods','goods_id','goods_id');
    }

    public function getImgsAttr($v){
        if(!$v){
            return '';
        }
        return explode(',',$v);
    }

    /**
     * cms添加评价
     * @param $post
     * @return mixed
     */
    public static function addRate($post){
        $post['user_id'] = 0;
        $post['order_id'] = 0;
        $imgmodel=new Image();
        if($post['headpic']) {
            $post['headpic'] = $imgmodel->where('id', $post['headpic'])->value('url');
        }
        if($post['imgs']) {
            $url_list=$imgmodel->where('id','in',$post['imgs'])->column('url');
            $post['imgs']=implode(",",$url_list);
        }
        $post['create_time']=strtotime($post['create_time']);
        $res=new self();
        $res=$res->isAutoWriteTimestamp('false')->create($post);
        return app('json')->success($res['id']);
    }

    /**
     * 添加回复
     * @param $post
     * @param  $aid
     * @return mixed
     */
    public static function addReply($post,$aid){
        $data['aid'] = $aid;
        $data['reply_content'] = $post['reply_content'] ;
        $data['reply_time']=time();
        $res=self::where('id',$post['id'])->update($data);
        if($res){
            return app('json')->success();
        }else{
            return app('json')->fail();
        }
    }
}