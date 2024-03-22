package com.james.api.board;

import com.james.api.article.Article;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "board")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
public class Board {

    @Id
    @Column(name = "board_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    private String title;
    private String content;
    private String writer;
    @Builder(builderMethodName = "builder")
    public Board(Article article, String title, String content, String writer) {
        this.article = article;
        this.title = title;
        this.content = content;
        this.writer = writer;
    }
}