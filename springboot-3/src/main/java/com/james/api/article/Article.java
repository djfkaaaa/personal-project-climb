package com.james.api.article;

import com.james.api.board.Board;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString

public class Article {
    @Id
    @Column(name = "article_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "article")
    private List<Board> board;

    private String title;
    private String content;
    private String writer;
    private String registerDate;
    @Builder(builderMethodName = "builder")
    public Article(Long id,String title, String content, String writer , String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.registerDate = registerDate;
    }
}